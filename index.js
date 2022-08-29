const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dholiya:parthr@cluster0.hqlahdl.mongodb.net/demo");

const productSchema = new mongoose.Schema({
    name: String,
    age: String,
    city: String,
    hobby: String,
});

const savedata = async () => {
    const product = mongoose.model('products', productSchema);
    const data = new product({ name: "harsh", age: "22", city: "surat", hobby: "volly ball" });
    const result = await data.save();
    console.log(result);
}

savedata();
const updatdata = async () => {
    const product = mongoose.model('products', productSchema);
    const data = await product.updateOne(
        { name: "harsh" },
        { $set: { city: "rajkot" } }
    )
    console.log(data);
};

updatdata();
const deletedata = async () => {
    const product = mongoose.model('products', productSchema);
    const data = await product.deleteOne({ name: "harsh" });
    console.log(data);
};

deletedata();
const finddata = async () => {
    const product = mongoose.model('products', productSchema);
    const data = await product.find();
    console.log(data);
};

finddata();
