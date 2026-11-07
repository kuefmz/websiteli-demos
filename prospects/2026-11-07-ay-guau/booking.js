import { bookingConfig } from './booking-config.js';

const mobileMenu = document.querySelector('.mobile-nav');
mobileMenu.addEventListener('click', (event) => {
  if (event.target.closest('a')) mobileMenu.open = false;
});
mobileMenu.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu.open) {
    mobileMenu.open = false;
    mobileMenu.querySelector('summary').focus();
  }
});

const form = document.querySelector('#booking-form');
const serviceSelect = document.querySelector('#booking-service');
const examples = document.querySelector('#booking-examples');
const status = document.querySelector('#booking-status');
const calendar = document.querySelector('#calendar');
const fallback = document.querySelector('#booking-fallback');
const validLink = /^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/;
const services = bookingConfig.services.filter(({ calLink }) => validLink.test(calLink));
const origin = 'https://app.cal.com';
let scriptLoad;
let attempt = 0;
let timeout;

if (bookingConfig.enabled && services.length === bookingConfig.services.length && services.length > 0) {
  services.forEach(({ name, minutes }, index) => {
    serviceSelect.add(new Option(`${name} · ${minutes} min`, String(index)));
  });
  examples.hidden = true;
  form.hidden = false;
  status.textContent = 'Selecciona un servicio para consultar la disponibilidad.';
  form.addEventListener('submit', showCalendar);
} else if (bookingConfig.enabled) {
  status.textContent = 'La agenda de prueba no está disponible en este momento.';
}

function loadCal() {
  if (scriptLoad) return scriptLoad;
  scriptLoad = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    // Official embed queue shape. The script drains the queue and owns iframe resizing.
    const enqueue = (target, args) => target.q.push(args);
    const cal = (...args) => {
      const [operation, namespace] = args;
      if (operation === 'init' && typeof namespace === 'string') {
        const api = (...command) => enqueue(api, command);
        api.q = [];
        cal.ns[namespace] = api;
        enqueue(api, args);
        enqueue(cal, ['initNamespace', namespace]);
      } else {
        enqueue(cal, args);
      }
    };
    cal.q = [];
    cal.ns = {};
    cal.loaded = true;
    window.Cal = cal;
    script.src = `${origin}/embed/embed.js`;
    script.onload = resolve;
    script.onerror = () => {
      script.remove();
      scriptLoad = undefined;
      reject(new Error('Cal.com embed unavailable'));
    };
    document.head.append(script);
  });
  return scriptLoad;
}

function showCalendar(event) {
  event.preventDefault();
  if (serviceSelect.value === '') return;
  const { calLink } = services[Number(serviceSelect.value)];
  const current = ++attempt;
  const namespace = `ay-guau-${current}`;
  const target = document.createElement('div');
  target.id = namespace;
  calendar.replaceChildren(target);
  calendar.hidden = false;
  fallback.href = `${origin}/${calLink}`;
  fallback.hidden = false;
  status.textContent = 'Cargando horarios…';
  clearTimeout(timeout);

  const showError = () => {
    if (current !== attempt) return;
    clearTimeout(timeout);
    status.textContent = 'La agenda está tardando en cargar. Puedes abrirla en otra pestaña.';
  };
  timeout = setTimeout(showError, 12000);

  const loading = loadCal();
  window.Cal('init', namespace, { origin });
  const api = window.Cal.ns[namespace];
  api('on', { action: 'linkReady', callback: () => {
    if (current !== attempt) return;
    clearTimeout(timeout);
    status.textContent = 'Selecciona una fecha y hora en la agenda.';
  } });
  api('on', { action: 'linkFailed', callback: showError });
  api('inline', {
    elementOrSelector: `#${namespace}`,
    calLink,
    config: { layout: 'column_view', theme: 'light' },
  });
  loading.catch(showError);
}
