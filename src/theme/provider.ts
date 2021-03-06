/**
 * Провайдер стилей
 * Через него добавляются/удаляются/запрашиваются новые стили в тему
 */
export class StyleProvider {
  private static _styleNames: Map<string, any> = new Map();

  public static get(alias: string, name: string): any {
    return StyleProvider._styleNames.get(`${alias}:${name}`);
  }

  public static default(controlClass: IControlClass, style: any): void {
    StyleProvider._styleNames.set(`${controlClass.alias}:default`, style);
  }

  public static getDefault(alias: string): any {
    return StyleProvider._styleNames.get(`${alias}:default`);
  }

  public static add(
    controlClass: IControlClass,
    name: string,
    style: any
  ): void {
    StyleProvider._styleNames.set(
      StyleProvider.formatName(controlClass, name),
      style
    );
  }

  public static remove(controlClass: IControlClass, name: string): void {
    StyleProvider._styleNames.delete(
      StyleProvider.formatName(controlClass, name)
    );
  }

  private static formatName(controlClass: IControlClass, name: string): string {
    return `${controlClass.alias}:${name}`;
  }
}

export interface IControlClass {
  alias: string;
}
