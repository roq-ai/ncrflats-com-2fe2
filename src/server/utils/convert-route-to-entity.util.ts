const mapping: Record<string, string> = {
  buyers: 'buyer',
  customers: 'customer',
  properties: 'property',
  sellers: 'seller',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
