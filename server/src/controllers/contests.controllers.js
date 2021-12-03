const express = require("express");
const Contest = require("../models/contest.model");
const router = express.Router();

router.post("/contest", async (req, res) => {
    try {
        let contest = new Contest(req.body);
        contest = await contest.save();
        res.status(200).json({
            status: 200,
            data: contest,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/contest", async (req, res) => {
    try {
        let users = await Contest.find();
        res.status(200).json({
            status: 200,
            data: users,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/contest/:ContestId", async (req, res) => {
    try {
        let contest = await Contest.findOne({
            _id: req.params.ContestId,
        });
        if (contest) {
            res.status(200).json({
                status: 200,
                data: contest,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No contest found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.put("/contest/:ContestId", async (req, res) => {
    try {
        let contest = await Contest.findByIdAndUpdate(req.params.ContestId, req.body, {
            new: true,
        });
        if (contest) {
            res.status(200).json({
                status: 200,
                data: contest,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No contest found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.delete("/contest/:ContestId", async (req, res) => {
    try {
        let contest = await Contest.findByIdAndRemove(req.params.ContestId);
        if (contest) {
            res.status(200).json({
                status: 200,
                message: "Contest deleted successfully",
            });
        } else {
            res.status(400).json({
                status: 400,
                message: "No contest found",
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

module.exports = router;


