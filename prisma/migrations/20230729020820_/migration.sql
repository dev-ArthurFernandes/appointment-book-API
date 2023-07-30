-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "recoveryEmail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone1" TEXT NOT NULL,
    "phone2" TEXT,
    "avatarURL" TEXT,
    "addedAt" TEXT NOT NULL,
    "deletedAt" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "email2" TEXT,
    "phone1" TEXT NOT NULL,
    "phone2" TEXT,
    "avatarURL" TEXT,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_recoveryEmail_key" ON "users"("recoveryEmail");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone1_key" ON "users"("phone1");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone2_key" ON "users"("phone2");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_email_key" ON "contacts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_email2_key" ON "contacts"("email2");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_phone1_key" ON "contacts"("phone1");

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
