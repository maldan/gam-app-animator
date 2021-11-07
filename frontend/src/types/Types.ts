export interface IObject {
  id: string;
  name: string;
  type: string;
}

export interface ISprite extends IObject {
  data: {
    url: string;
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
    width: number;
    height: number;
  };
}
