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

const casinoController = {
  createCasino,
  getCasinoByOwner
};
export default casinoController;
