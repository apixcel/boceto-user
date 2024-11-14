import BankAccount from "../models/bankAccount.model";
import catchAsyncError from "../utils/catchAsyncError";
import sendResponse from "../utils/sendResponse";

const createUserBankAccount = catchAsyncError(async (req, res) => {
  const user = req.user!;
  const { instruction1, instruction2, bank, nombre, cbu, alias } = req.body;
  console.log("sssss", req.body);

  const payload = {
    instruction1,
    instruction2,
    accountHolderName: nombre,
    bank,
    cbu,
    alias,
    user: user._id,
  };

  console.log("payload", payload);
  const bankAccount = await BankAccount.create(payload);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: bankAccount,
    message: "Bank account created successfully",
  });
});

const retriveUserBankAccounts = catchAsyncError(async (req, res) => {
  const user = req.user!;

  const bankAccounts = await BankAccount.find({ user: user._id });
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: bankAccounts,
    message: "Bank accounts retrieved successfully",
  });
});

const updateUserBankAccount = catchAsyncError(async (req, res) => {
  const user = req.user!;
  const id = req.params.bankAccountId;

  const isExist = await BankAccount.exists({ _id: id, user: user._id });

  if (!isExist) {
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      data: null,
      message: "Bank account not found",
    });
  }

  const result = await BankAccount.findByIdAndUpdate(
    isExist._id,
    {
      ...req.body,
    },
    { new: true, runValidators: true }
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: "Bank account updated successfully",
  });
});

const deleteUserBankAccount = catchAsyncError(async (req, res) => {
  const user = req.user!;
  const id = req.params.bankAccountId;

  const isExist = await BankAccount.exists({ _id: id, user: user._id });

  if (!isExist) {
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      data: null,
      message: "Bank account not found",
    });
  }

  await BankAccount.findByIdAndDelete(isExist._id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: null,
    message: "Bank account deleted successfully",
  });
});

const bankAccountController = {
  createUserBankAccount,
  retriveUserBankAccounts,
  updateUserBankAccount,
  deleteUserBankAccount,
};

export default bankAccountController;
