export class Accomplishment {
    constructor(
        public type: string,
        public what: string,
        public how: string,
        public extra: string,
        public userid: string,
        public id: string,
        public createdts: Date,
        public modifiedts: Date) {}
}
