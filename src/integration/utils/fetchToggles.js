import constructTogglesEndpoint from '#app/contexts/ToggleContext/utils/constructTogglesEndpoint';
import fetch from 'node-fetch';

export default async service => {
  const togglesUrl = constructTogglesEndpoint(service);
  const response = await fetch(togglesUrl, {
    headers: { origin: 'http://localhost:7080' },
  });

  const { toggles } = await response.json();

  return toggles;
};
