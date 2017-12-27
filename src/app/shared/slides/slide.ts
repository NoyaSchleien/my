import { ICamera } from "./camera";
import { IMicrophone } from "./microphone";
import { IArea } from "./area";

export interface ISlide {
    location: string;
    description: string;
    slideIndex: number;
    cameras: ICamera[];
    microphones: IMicrophone[];
    areas: IArea[]; 
}
