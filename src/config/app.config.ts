interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['ME'],
  customerRoles: ['Seller'],
  tenantRoles: ['CUSTOMERS'],
  tenantName: 'BUYER',
  applicationName: 'NCRFLATS.COM',
  addOns: ['chat', 'notifications', 'file'],
};
