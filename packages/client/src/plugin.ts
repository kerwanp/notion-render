import { BlockRenderer, ExtensionFunc } from './types';

export type Plugin<Config = unknown> = (config: Config) => {
  renderers: BlockRenderer[];
  extensions: ExtensionFunc[];
};
