export class Accomplishment {
    constructor(
        public type: string,
        public what: string,
        public how: string,
        public result: string,
        public extracurricular: string,
        public nextgoals: string,
        public userid: string,
        public id: string,
        public createdts: Date,
        public modifiedts: Date) {}

    public setId(id: number) {
        this.id=id;
    }
}
