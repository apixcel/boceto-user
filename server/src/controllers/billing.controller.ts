import QueryBuilder from "../builder/QueryBuilder";
import AppError from "../error/AppError";
import Billing from "../models/billing.model";
import Casino from "../models/casino.model";
import catchAsyncError from "../utils/catchAsyncError";
import sendResponse from "../utils/sendResponse";

const createBilling = catchAsyncError(async (req, res) => {
  const user = req.user!;
  const body = req.body;
  const casinoId = req.params.casinoId;
  const casino = await Casino.findById(casinoId);
  if (!casino) {
    throw new AppError(404, "Casino not found for this user");
  }
  const result = await Billing.create({
    ...body,
    user: user._id,
    casino: casino._id,
  });
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: "Billing created successfully",
  });
});

const getBillingByCasinoOwner = catchAsyncError(async (req, res) => {
  const user = req.user!;
  const casino = await Casino.findOne({ owner: user._id });
  if (!casino) {
    sendResponse(res, {
      success: false,
      statusCode: 404,
      data: [],
      message: "Casino not found for this user",
    });
    return;
  }

  const model = Billing.find({ casino: casino._id }).populate("user");
  const queryBuilder = new QueryBuilder(model, req.query)
    .fields()
    .filter()
    .sort()
    .paginate();
  const { totalCount } = await queryBuilder.count();
  const result = await queryBuilder.modelQuery;

  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    totalDoc: totalCount,
    message: "Billing found successfully",
  });
});

const billingController = {
  createBilling,
  getBillingByCasinoOwner,
};

export default billingController;
