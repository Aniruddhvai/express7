
const  fs = require('fs'); // import fs to work with file system

const path = require('path');



module.exports = class Product{

    constructor(incomingTitle){
        this.title  = incomingTitle;
    }

    save() {
        const p = path.join(path.dirname(process.mainModule.filename), 
        'data' , 'product.json'
    )
        fs.readFile(p , (err , filecontent)=>{

            let products = [];

            if(!err){
                products= JSON.parse(filecontent);

            }
            products.push(this);

            fs.writeFile( p ,jSON.stringify(products) , (err)=>{
                console.log(err)
            } )
        })
    }

    static fetchAll(cb) {

        const p = path.join(path.dirname(process.mainModule.filename), 
        'data' , 'product.json'
    )

        fs.readFile( p , (err , filecontent)=>{
            if(err){
                cb([]);
            }

            cb(jSON.parse(filecontent));
        })
        
    }

}