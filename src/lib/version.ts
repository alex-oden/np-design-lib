import pkg from "../../package.json" with { type: "json" };

export const APP_VERSION = pkg.version;
export const APP_VERSION_FULL = `v${pkg.version}`;
export const APP_VERSION_SHORT = `v${pkg.version.split(".").slice(0, 2).join(".")}`;