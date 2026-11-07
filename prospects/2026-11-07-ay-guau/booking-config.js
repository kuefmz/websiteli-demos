// Only use provider links approved for the audience of this deployment.
// These values are public on a static host. Never put credentials here.
export const bookingConfig = {
  enabled: true,
  calendlyUrl: 'https://calendly.com/jenifer-ciuciu-kiss-websiteli/30min',
  services: [
    { name: 'Baño básico', minutes: 45, calLink: '' },
    { name: 'Estética canina', minutes: 75, calLink: '' },
    { name: 'Corte de uñas', minutes: 15, calLink: '' },
  ],
};
