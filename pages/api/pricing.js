import Pricing from '../../models/Pricing';

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "DELETE":
            await handleDeleteRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
}

async function handleGetRequest(req, res) {
    const { _id } = req.query;
    const pricing = await Pricing.findOne({ _id });
    res.status(200).json(pricing);
}

async function handleDeleteRequest(req, res) {
    const { _id } = req.query;
    await Pricing.findOneAndDelete({ _id });
    res.status(204).json({});
}

