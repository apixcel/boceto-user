import AppError from "../error/AppError";
import { IFrontViewPayload } from "../interface/frontview.interface";
import Background from "../models/background.model";
import Casino from "../models/casino.model";
import FrontView from "../models/frontView.model";
import TopButton from "../models/topButton.model";
import catchAsyncError from "../utils/catchAsyncError";
import sendResponse from "../utils/sendResponse";

const createFrontView = catchAsyncError(async (req, res) => {
  const user = req.user!;
  const casino = await Casino.findOne({ owner: user._id });

  if (!casino) {
    throw new AppError(404, "Casino not found for this user");
  }
  const body = req.body as IFrontViewPayload;
  const { background: bgPayload, topButton: btnPayload, ...rest } = body;

  const background = await Background.create(bgPayload);
  const topButton = await TopButton.create(btnPayload);

  const result = await FrontView.create({
    ...rest,
    background: background._id,
    topButton: topButton._id,
    casino: casino._id,
  });
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: "Font view created successfully",
  });
});

const retriveFrontviewByOwner = catchAsyncError(async (req, res) => {
  const user = req.user!;
  const casino = await Casino.findOne({ owner: user._id });

  if (!casino) {
    throw new AppError(404, "Casino not found for this user");
  }

  const frontView = await FrontView.findOne({ casino: casino._id }).populate(
    "background topButton"
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: frontView,
    message: "Font view retrieved successfully",
  });
});

const updateFrontView = catchAsyncError(async (req, res) => {
  const user = req.user!;
  const casino = await Casino.findOne({ owner: user._id });

  if (!casino) {
    throw new AppError(404, "Casino not found for this user");
  }

  const body = req.body as Partial<IFrontViewPayload>;
  const { background: bgPayload, topButton: btnPayload, ...rest } = body;

  const frontView = await FrontView.findOne({ casino: casino._id });
  if (!frontView) {
    throw new AppError(404, "FrontView not found for this casino");
  }

  if (bgPayload) {
    if (frontView.background) {
      await Background.findByIdAndUpdate(frontView.background, bgPayload);
    } else {
      const newBackground = await Background.create(bgPayload);
      frontView.background = newBackground._id;
    }
  }

  if (btnPayload) {
    if (frontView.topButton) {
      await TopButton.findByIdAndUpdate(frontView.topButton, btnPayload);
    } else {
      const newTopButton = await TopButton.create(btnPayload);
      frontView.topButton = newTopButton._id;
    }
  }
  Object.assign(frontView, rest);

  await frontView.save();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: frontView,
    message: "Front view updated successfully",
  });
});

const retriveFrontviewByeCasinoId = catchAsyncError(async (req, res) => {
  const id = req.params.casinoId;
  const casino = await Casino.findById(id);
  if (!casino) {
    throw new AppError(404, "Casino not found for this user");
  }
  const frontView = await FrontView.findOne({ casino: casino._id }).populate(
    "background topButton"
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: frontView,
    message: "Font view retrieved successfully",
  });
});

const frontViewController = {
  createFrontView,
  retriveFrontviewByeCasinoId,
  updateFrontView,retriveFrontviewByOwner
};

export default frontViewController;
