import AppError from "../error/AppError";
import Casino from "../models/casino.model";
import catchAsyncError from "../utils/catchAsyncError";
import sendResponse from "../utils/sendResponse";

const createCasino = catchAsyncError(async (req, res) => {
  const user = req.user!;
  const payload = {
    dueDate: new Date(),
    owner: user._id,
    ...req.body,
  };

  const result = await Casino.create(payload);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: "Casino created successfully",
  });
});
const getCasinoByOwner = catchAsyncError(async (req, res) => {
  const user = req.user!;
  const casino = await Casino.findOne({ owner: user._id });

  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: casino,
    message: "Casino found successfully",
  });
});

const updateCasino = catchAsyncError(async (req, res) => {
  const user = req.user!;
  const casinoId = req.params.casinoId;
  const casino = await Casino.findOne({ _id: casinoId, owner: user._id });

  if (!casino) {
    throw new AppError(404, "Casino not found for this user");
  }

  const body = req.body;
  ["_id", "owner", "status", "dueDate"].forEach((key) => delete body[key]);

  const result = await Casino.findByIdAndUpdate(casino._id, body, {
    new: true,
    runValidators: true,
  });

  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: "Casino updated successfully",
  });
});

const casinoController = {
  createCasino,
  getCasinoByOwner,
  updateCasino
};
export default casinoController;
