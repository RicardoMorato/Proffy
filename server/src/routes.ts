import express from 'express';


import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

interface scheduleItem {
  week_day: number,
  from: string,
  to: string
}

routes.get('/', (req, res) => {
  res.json({
    App: 'Proffy API',
    Status: 'Development',
    Author: 'Ricardo Morato <https://github.com/RicardoMorato>',
  });
});

routes.post('/classes', async (req, res) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule,
  } = req.body;

  const insertedUsersIds = await db('users').insert({
    name,
    avatar,
    whatsapp,
    bio,
  });

  const user_id = insertedUsersIds[0];

  const insertedClassesIds = await db('classes').insert({
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

  await db('class_schedule').insert(classSchedule);

  return res.json({
    Message: "User created!",
  });
});

export default routes;
