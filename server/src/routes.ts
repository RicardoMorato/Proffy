import express, { response } from "express";

import db from "./database/connection";
import convertHourToMinutes from "./utils/convertHourToMinutes";

const routes = express.Router();

interface scheduleItem {
  week_day: number;
  from: string;
  to: string;
}

routes.get("/", (req, res) => {
  res.json({
    App: "Proffy API",
    Status: "Development",
    Author: "Ricardo Morato <https://github.com/RicardoMorato>",
  });
});

routes.post("/classes", async (req, res) => {
  const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

  const trx = await db.transaction();

  try {
    const insertedUsersIds = await trx("users").insert({
      name,
      avatar,
      whatsapp,
      bio,
    });

    const user_id = insertedUsersIds[0];

    const insertedClassesIds = await trx("classes").insert({
      subject,
      cost,
      user_id,
    });

    const class_id = insertedClassesIds[0];

    const classSchedule = schedule.map((item: scheduleItem) => {
      return {
        class_id,
        week_day: item.week_day,
        from: convertHourToMinutes(item.from),
        to: convertHourToMinutes(item.to),
      };
    });

    await trx("class_schedule").insert(classSchedule);

    await trx.commit();

    return res.status(201).json({
      Message: "Class created",
    });
  } catch (err) {
    await trx.rollback();

    return res.status(400).json({
      Message: 'Unexpected error while creating new class',
      error: err,
    });
  }
});

export default routes;
