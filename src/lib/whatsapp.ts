import { getDeliveryStatus } from "./delivery";

interface OrderItem {
    id: string;
    name: string;
    type: "dress" | "accessory" | "tailoring";
    price: number;
    customizations?: Record<string, string>;
}

export function generateWhatsAppUrl(item: OrderItem): string {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER || "919322264199";
    const deliveryInfo = getDeliveryStatus();

    let message = `*New Order from Pune WhatsApp Store*\n\n`;
    message += `*Product:* ${item.name}\n`;
    message += `*Type:* ${item.type.charAt(0).toUpperCase() + item.type.slice(1)}\n`;
    message += `*Price:* ₹${item.price}\n`;

    if (item.customizations && Object.keys(item.customizations).length > 0) {
        message += `\n*Customizations:*\n`;
        Object.entries(item.customizations).forEach(([key, value]) => {
            message += `- ${key}: ${value}\n`;
        });
    }

    message += `\n*Delivery Date:* ${deliveryInfo.deliveryDate} (${deliveryInfo.status})\n`;
    message += `\n*Customer Intent:* I want to pay via UPI and order this.\n`;
    message += `\n_Note: Porter fulfillment team will be notified upon payment screenshot verification._`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
