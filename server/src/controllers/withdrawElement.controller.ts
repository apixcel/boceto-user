import AppError from "../error/AppError";
import Casino from "../models/casino.model";
import WithdrawElement from "../models/withdrawElement.model";
import catchAsyncError from "../utils/catchAsyncError";
import sendResponse from "../utils/sendResponse";

const createWithdrawElement = catchAsyncError(async (req, res) => {
  const user = req.user!;
  const body = req.body;
  const casino = await Casino.findOne({ owner: user._id });
  if (!casino) {
    throw new AppError(404, "Casino not found for this user");
  }
  const result = await WithdrawElement.create({
    ...body,
    casino: casino._id,
  });
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: "Withdraw element created successfully",
  });
});

const getWithdrawElementByCasinoId = catchAsyncError(async (req, res) => {
  const id = req.params.casinoId;
  const casino = await Casino.findById(id);
  if (!casino) {
    throw new AppError(404, "Casino not found for this user");
  }
  const result = await WithdrawElement.findOne({ casino: casino._id });
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: "Withdraw element fetched successfully",
  });
});
const getWithdrawElementByOwener = catchAsyncError(async (req, res) => {
  const user = req.user!;
  const casino = await Casino.findOne({ owner: user._id });
  if (!casino) {
    throw new AppError(404, "Casino not found for this user");
  }
  const result = await WithdrawElement.findOne({ casino: casino._id });
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: "Withdraw element fetched successfully",
  });
});

const updateWithdrawElement = catchAsyncError(async (req, res) => {
  const user = req.user!;
  const body = req.body;
  const casino = await Casino.findOne({ owner: user._id });
  if (!casino) {
    throw new AppError(404, "Casino not found for this user");
  }
  const result = await WithdrawElement.findOneAndUpdate(
    { casino: casino._id },
    { ...body }
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: "Withdraw element updated successfully",
  });
});

const withdrawElementController = {
  createWithdrawElement,
  getWithdrawElementByCasinoId,
  getWithdrawElementByOwener,
  updateWithdrawElement,
};

export default withdrawElementController;
