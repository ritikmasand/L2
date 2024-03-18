enum Mediatypes{
Book,Magazine
}


interface IMediaItem{
    properties(title:string,creator:string,type:Mediatypes)
    displayInfo()
}
class Book implements IMediaItem{
    displayInfo(){
        return `${Mediatypes.Magazine} - The Catcher in the Rye by J.D. Salinger`
    }
properties(title: string, creator: string, type: Mediatypes) {
    console.log(`The title is ${title},creator is ${creator},and it is of type ${Mediatypes[type]}`); 
}
}
class Magazine implements IMediaItem{
    displayInfo(){
        return `${Mediatypes.Magazine} - The Catcher in the Rye by J.D. Salinger`
    }
    properties(title: string, creator: string, type: Mediatypes) {
        console.log(`The title is ${title},creator is ${creator},and it is of type ${Mediatypes[type]}`); 
    }
}

let book1 = new Book()
book1.properties('harry potter','jk rowling',Mediatypes.Book)
book1.displayInfo()

let maganize1 = new Magazine()
maganize1.properties('M1','A1',Mediatypes.Magazine)
maganize1.displayInfo()
