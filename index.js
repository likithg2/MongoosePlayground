const mongoose=require('mongoose');
main()
    .then(()=>{
    console.log("successful connection");
})
    .catch((err) => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("User",userSchema);

const user1= new User({name:'adam', email:'adam@yahoo.in',age:'48'});
const user2=new User({name:"eve",email:"eve@google.com",age:48});

user1.save();
user2.save()
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })

User.insertMany([
    {name:"Tony",email:"tony@gmail.com",age:50},
    {name:"Peter",email:"peter@gmail.com",age:30},
    {name:"Bruce",email:"bruce@gmaik.com",age:47},
]).then((res)=>{
    console.log(res);
})

User.find().then((data)=>{
    console.log(data)
});
User.find({age:{$gte:48}}).then((data)=>{
    console.log(data)
});
User.findOne({age:{$gte:48}}).then((data)=>{
    console.log(data)
});

User.findById('6ad675afa1048d3b1bad6a4f').then((data)=>{
    console.log(data)
});


User.updateOne({name:'peter'},{age:51}).then((res)=>{
    console.log(res);
})
    .catch((err) => console.log(err));

User.updateMany({age:{$gte:47}},{age:51}).then((res)=>{
    console.log(res);
})
    .catch((err) => console.log(err));

User.findOneAndUpdate({name:"Tony"},{age:60},{new:true}).then((res)=>{
    console.log(res);
})
    .catch((err) => console.log(err));

User.findByIdAndUpdate("6ad675afa1048d3b1bad6a4f",{age:60},{new:true}).then((res)=>{
    console.log(res);
})
    .catch((err) => console.log(err));

User.deleteOne({name:'adam'}).then((res)=>{
    console.log(res);
})
    .catch((err) => console.log(err));

User.deleteOne({age:48}).then((res)=>{
    console.log(res);
})
    .catch((err) => console.log(err));

User.findOneAndDelete({name:'peter'}).then((res)=>{
    console.log(res);
})
    .catch((err) => console.log(err));

User.findByIdAndDelete("6ad675afa1048d3b1bad6a4f").then((res)=>{
    console.log(res);
})
    .catch((err) => console.log(err));
