const express = require("express");
const Lists = require("../model/lists");

const getLists = (req, res, next) => {
  try {
    Lists.find({}, (err, data) => {
      if (err) {
        return err;
      }
      res.json({
        data: data,
      });
    });
  } catch (error) {
    res.json({
      message: err,
    });
  }
};

const createList = (req, res) => {
  try {
    const list = new Lists(req.body);
    list.save();
    res.json({
      success: true,
      message: "Tanii list amjilttai burtgegdlee",
    });
  } catch (error) {
    console.error(error);
  }
};



module.exports = { getLists, createList };
