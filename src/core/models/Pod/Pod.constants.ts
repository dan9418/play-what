import { IPod } from '../Model.constants';
import { MAX_DEGREE, ROOT_DEGREE } from "../../theory/Degree.constants";
import { MAX_PITCH, ROOT_PITCH } from "../../theory/Pitch.constants";

export const MAX_POD: IPod = [MAX_PITCH, MAX_DEGREE];

export const DEFAULT_POD: IPod = [ROOT_PITCH, ROOT_DEGREE];
