import { ICamera } from "./camera";
import { IMicrophone } from "./microphone";

export interface IArea {
    id:number;
    name:string;
    top: number;
    left: number;
    areaCameras: number[];
    areaMicrophones: number[];

}
