import { NextResponse } from 'next/server';
import { EmailService } from '@src/services/emailService';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        // Basic Validation
        if (!name?.trim() || !email?.trim() || !message?.trim()) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Email format validation (optional but good practice)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Send email using the service
        await EmailService.sendContactEmail({ name, email, message });

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error', details: error.message },
            { status: 500 }
        );
    }
}
