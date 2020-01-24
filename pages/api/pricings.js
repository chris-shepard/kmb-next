import connectDb from '../../utils/connectDb';
import Pricing from '../../models/Pricing';

connectDb();

export default async (req, res) => {
    const pricings = await Pricing.find();
    res.status(200).json(pricings);
};