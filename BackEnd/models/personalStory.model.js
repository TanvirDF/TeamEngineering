
const mongoose = require("mongoose");

const degreeSchema = new mongoose.Schema({
    university: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    fromDate: {
        type: Date,
        required: true,
    },
    toDate: {
        type: Date,
        required: true,
    },
    weight: {
        type: String,
        enum: ["XL", "L", "M", "S", "XS"],
        required: false,
    },
    priority: {
        type: Number,
        required: false,
    },
    description: {
        type: String,
        required: false,
    }
});

const schoolingSchema = new mongoose.Schema({
    school: {
        type: String,
        required: true,
    },
    examType: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    year: {
        type: Date,
        required: true,
    },
    weight: {
        type: String,
        enum: ["XL", "L", "M", "S", "XS"],
        required: false,
    },
    priority: {
        type: Number,
        required: false,
    },
    description: {
        type: String,
        required: false,
    }

});

const workSchema = new mongoose.Schema({
    type: {
        type: String,
        required: false,
    },
    employer: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    fromDate: {
        type: Date,
        required: false,
    },
    toDate: {
        type: Date,
        required: false,
    },
    weight: {
        type: String,
        enum: ["XL", "L", "M", "S", "XS"],
        required: false,
    },
    priority: {
        type: Number,
        required: false,
    },
    description: {
        type: String,
        required: false,
    }

});

const awardsSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    examType: {
        type: String,
        required: true,
    },
    issuer: {
        type: String,
        required: true,
    },
    award: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: false,
    },
    year: {
        type: Date,
        required: true,
    },
    weight: {
        type: String,
        enum: ["XL", "L", "M", "S", "XS"],
        required: false,
    },
    priority: {
        type: Number,
        required: false,
    },
    description: {
        type: String,
        required: false,
    }

});

const portfolioSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    year: {
        type: Date,
        required: true,
    },
    weight: {
        type: String,
        enum: ["XL", "L", "M", "S", "XS"],
        required: false,
    },
    priority: {
        type: Number,
        required: false,
    },
    description: {
        type: String,
        required: false,
    }

});

const personalStorySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    degrees: {
        type: [degreeSchema],
        default: [],
        required: false,
    },
    schooling: {
        type: [schoolingSchema],
        default: [],
        required: false,
    },
    work: {
        type: [workSchema],
        default: [],
        required: false,
    },
    awards: {
        type: [awardsSchema],
        default: [],
        required: false,
    },
    portfolio: {
        type: [portfolioSchema],
        default: [],
        required: false,
    }
});


const PersonalStory = mongoose.model(`PersonalStory`, personalStorySchema);

module.exports = PersonalStory;
