export interface IPrintable {
    render(targetNode: HTMLElement, position: InsertPosition):void;
}