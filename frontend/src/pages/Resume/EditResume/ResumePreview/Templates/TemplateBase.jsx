export const drawHeader = (ctx, personalDetails) => {
  // Header nền
  ctx.fillStyle = "#1e2532";
  ctx.fillRect(0, 0, 800, 100);

  // Thông tin cá nhân
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 24px Arial";
  ctx.fillText(personalDetails.name || "John Doe", 50, 50);

  ctx.font = "16px Arial";
  ctx.fillText(personalDetails.email || "johndoe@example.com", 50, 75);
  ctx.fillText(personalDetails.phone || "+123 456 789", 250, 75);
};

export const drawSectionTitle = (ctx, title, yPosition) => {
  ctx.fillStyle = "#333333";
  ctx.font = "bold 20px Arial";
  ctx.fillText(title, 50, yPosition);
};

export const drawSectionContent = (ctx, content, yPositionStart) => {
  ctx.fillStyle = "#000000";
  ctx.font = "16px Arial";
  content.forEach((item, index) => {
    ctx.fillText(item, 50, yPositionStart + index * 25);
  });
};
