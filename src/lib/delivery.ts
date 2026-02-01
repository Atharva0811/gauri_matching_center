export interface DeliveryInfo {
    status: "Same-Day" | "Tomorrow";
    message: string;
    deliveryDate: string;
}

export function getDeliveryStatus(): DeliveryInfo {
    // Get current time in IST
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istTime = new Date(now.getTime() + istOffset);

    const hours = istTime.getUTCHours();
    const minutes = istTime.getUTCMinutes();

    const cutoffHour = 9;
    const isBeforeCutoff = hours < cutoffHour || (hours === cutoffHour && minutes === 0);

    const deliveryDate = new Date(istTime);
    if (!isBeforeCutoff) {
        deliveryDate.setUTCDate(deliveryDate.getUTCDate() + 1);
    }

    const dateString = deliveryDate.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return {
        status: isBeforeCutoff ? "Same-Day" : "Tomorrow",
        message: isBeforeCutoff
            ? "Order now for Same-Day Delivery"
            : "Delivery Tomorrow",
        deliveryDate: dateString,
    };
}
