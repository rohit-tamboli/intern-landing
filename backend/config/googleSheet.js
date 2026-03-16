import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

export const addPaymentToSheet = async (payment) => {
  const client = await auth.getClient();

  await sheets.spreadsheets.values.append({
    auth: client,
    spreadsheetId: "1U4p_AbIfw0ldo3KQ33va5fez1Y__wc6Yf4EJ4AXb2xg",
    range: "Sheet1!A:J",
    valueInputOption: "RAW",
    resource: {
      values: [
        [
          payment.name,
          payment.email,
          payment.mobileNumber,
          payment.role,
          payment.address,
          payment.whatsappChannel,
          payment.department,
          payment.college,
          payment.study,
          payment.amount,
          payment.status,
          payment.merchantTransactionId,
          new Date().toLocaleString(),
        ],
      ],
    },
  });
};
