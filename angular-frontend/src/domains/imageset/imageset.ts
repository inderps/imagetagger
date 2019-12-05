import {Entity} from '../seedwork/entity';

export class Imageset extends Entity {
    id: number;
    name: string;
    location?: string;
    description?: string;
    time: string;
    public: boolean;
    publicCollaboration: boolean;
    imageLock: boolean;
    priority: number;
    zipState: number;
    permissions: ImageSetPermissions;
    tags: string[];
    isPinned: boolean;
    numberOfImages: number;

    images: number[];       // Reference to Image
    mainAnnotationType?: number;    // Reference to AnnotationType
    team: number;       // Reference to Team
    creator?: number;    // Reference to User

    public togglePinned(): void {
        this.isPinned = !this.isPinned;
    }
}


export interface ImageSetPermissions {
    verify: boolean;
    annotate: boolean;
    createExport: boolean;
    deleteExport: boolean;
    deleteAnnotation: boolean;
    deleteSet: boolean;
    deleteImages: boolean;
    editAnnotation: boolean;
    editSet: boolean;
    read: boolean;
}


// TODO Remove these classes
export interface TeamInImageset {
    id: number;
    name: string;
}


export interface UserInImageset {
    id: number;
    name: string;
}


export interface ImageInImageset {
    id: number;
    name: string;
}
