export interface Ingredient{
    ingredient: string;
    measure: string;

    // constructor(i: string, m: string){
    //     this.ingredient = i;
    //     this.measure = m;
    // }

}

export interface Instruction{
    instruction: string;
    photo: string;

    // constructor(i: string, p: string){
    //     this.instruction = i;
    //     this.photo = p;
    // }
}

export class Recipe{
    public id: number;
    public title: string;
    public desc: string;
    public feeds_this_many: number;
    public preparation_time: number;
    public ingredients: Ingredient[];
    public instructions: Instruction[];
    public cover_photo: string;
    public keywords: string[];

    constructor(
        id: number,
        t: string,
        d: string,
        feeds: number,
        pt: number,
        ing: Ingredient[],
        ins: Instruction[],
        cp: string,
        keywords: string[]){
            this.id = id;
            this.title = t;
            this.desc = d;
            this.feeds_this_many = feeds;
            this.preparation_time = pt;
            this.ingredients = ing;
            this.instructions = ins;
            this.cover_photo = cp;
            this.keywords = keywords;
        }

        public static createBlank(): Recipe {
            return new Recipe(-1, '', '', 1, 1, [], [], '', []);
        }

        public static recipeFromJson(obj: any): Recipe {
            return new Recipe(obj.id,
                obj.title,
                obj.desc,
                obj.feeds_this_many,
                obj.preparation_time,
            obj.ingredients,
            obj.instructions,
            obj.cover_photo,
            obj.keywords);
        }

}

