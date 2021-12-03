const express = require("express");
const Student = require("../models/students.model");
const router = express.Router();

router.post("/student", async (req, res) => {
    try {
        let student = new Student(req.body);
        student = await student.save();
        res.status(200).json({
            status: 200,
            data: student,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/student", async (req, res) => {
    try {
        let users = await Student.find();
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

router.get("/student/:studentId", async (req, res) => {
    try {
        let student = await Student.findOne({
            _id: req.params.studentId,
        });
        if (student) {
            res.status(200).json({
                status: 200,
                data: student,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No student found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.put("/student/:studentId", async (req, res) => {
    try {
        let student = await Student.findByIdAndUpdate(req.params.studentId, req.body, {
            new: true,
        });
        if (student) {
            res.status(200).json({
                status: 200,
                data: student,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No student found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.delete("/student/:studentId", async (req, res) => {
    try {
        let student = await Student.findByIdAndRemove(req.params.studentId);
        if (student) {
            res.status(200).json({
                status: 200,
                message: "Student deleted successfully",
            });
        } else {
            res.status(400).json({
                status: 400,
                message: "No student found",
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


