import Tutorial from "../models/Tutorial.js"

export const getTutorials = async (req, res) => {
    try {
        const tutorials = await Tutorial.find({});

        res.status(200).json({
            data: tutorials,
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error.",
            details: error.message
        })
    }
}

export const addTutorials = async (req, res) => {
    try {
        const { imageUrl, title, rating, numberOfStudentsWatched, totalReviews } = req.body;

        const newTutorial = await Tutorial.create({
            image: imageUrl,
            numberOfStudentsWatched,
            rating,
            title,
            totalReviews
        })

        res.status(201).json({
            data: [
                newTutorial
            ]
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error.",
            details: error.message
        })
    }
}


export const updateTutorials = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        delete body["_id"];

        const updatedTutorial = await Tutorial.findByIdAndUpdate(id, {
            ...body
        })

        res.status(200).json({
            data: [
                { ...updatedTutorial, ...body }
            ]
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error.",
            details: error.message
        })
    }
}

export const deleteTutorials = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTutorial = await Tutorial.findByIdAndDelete(id)

        res.status(200).json({
            data: [
                deletedTutorial
            ]
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error.",
            details: error.message
        })
    }
}