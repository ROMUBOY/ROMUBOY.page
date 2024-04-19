export class Tag{
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TYPESCRIPT = new Tag('TypeScript','darkred');
    static readonly CSHARP = new Tag('C#','green');
    static readonly ASPNET = new Tag('ASP.NET','purple');
    static readonly JAVASCRIPT = new Tag('Javascript','orange');
    static readonly REACT = new Tag('React','blue');

    private constructor(private readonly key: string, public readonly color : string){}

    toString(){
        return this.key;
    }
}