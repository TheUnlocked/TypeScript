//// [omitOfTypeExtendingIndexSignature.ts]
// #36981
type AnyRecord = Record<string, any>;
interface ExtendsAny extends AnyRecord {
    myKey1: string;
    myKey2: string;
}

type OmitsKey = Omit<ExtendsAny, "myKey2">;
type OmitsKey1 = OmitsKey["myKey1"]; // should be `string`
type OmitsKey2 = OmitsKey["myKey2"]; // should be `any`

//// [omitOfTypeExtendingIndexSignature.js]
