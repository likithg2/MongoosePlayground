const mongoose=require('mongoose');
main()
    .then(()=>{
    console.log("successful connection");
})
    .catch((err) => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/books');
}

const bookSchema=new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,'very low'],
    },
    discount:{
        type:Number,
        default:0,
    },
    genre:[String],
    category:{
        type:String,
        enum:["fiction",'non-fiction'],
    },

});

const Book=mongoose.model("Book",bookSchema);

const book1=new Book({
    title:"Mathematics XII",
    author:"RD SHarma",
    price:2000
});

book1.save().then((res)=>{
    console.log(res);
})

