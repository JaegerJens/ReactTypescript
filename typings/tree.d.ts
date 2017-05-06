export interface TreeItem {
    id: number;
    level: number;
    parentId?: number;
    parentIndex?: number;
    childrenIndex?: number[];
    name: string;
    isExpanded: boolean;
    objectType: "dossier" | "sequence" | "section" | "leaf";
}
