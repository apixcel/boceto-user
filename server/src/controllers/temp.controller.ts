
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
    const bankAccount= axios.fetcg
    sendResponse(res, {
      success: true,
      statusCode: 200,
      data: bankAccount,
      message: "Bank account created successfully",
    });
  });