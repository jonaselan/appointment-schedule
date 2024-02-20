-- AlterTable
CREATE SEQUENCE appointments_id_seq;
ALTER TABLE "appointments" ALTER COLUMN "id" SET DEFAULT nextval('appointments_id_seq');
ALTER SEQUENCE appointments_id_seq OWNED BY "appointments"."id";

-- AlterTable
CREATE SEQUENCE users_id_seq;
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq');
ALTER SEQUENCE users_id_seq OWNED BY "users"."id";
