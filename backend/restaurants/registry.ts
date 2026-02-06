/**
 * Restaurant Registry
 * Maps restaurant slugs to their platform adapters and configs
 */

import { RestaurantAdapter, RestaurantConfig } from '../lib/types';
import { createTableCheckAdapter } from './tablecheck/adapter';
import pizza4psConfig from './tablecheck/pizza-4ps-indiranagar';

// Registry of all restaurant configs
const configs: Record<string, RestaurantConfig> = {
  'pizza-4ps-indiranagar': pizza4psConfig,
};

// Adapter factory by platform
const adapterFactories: Record<string, (config: RestaurantConfig) => RestaurantAdapter> = {
  'tablecheck': createTableCheckAdapter,
};

export function getRestaurantConfig(slug: string): RestaurantConfig | null {
  return configs[slug] || null;
}

export function getAdapter(slug: string): RestaurantAdapter | null {
  const config = configs[slug];
  if (!config) return null;

  const factory = adapterFactories[config.platform];
  if (!factory) return null;

  return factory(config);
}

export function listRestaurants(): RestaurantConfig[] {
  return Object.values(configs);
}
