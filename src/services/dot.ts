import { isNil } from 'lodash';

import db from '../util/db';

function mapRowToJson(row: DotRow): Dot {
  if (isNil(row)) {
    return row;
  }

  return {
    id: Number(row.id),
    dots: row.dots,
  };
}

async function getDot(id: number): Promise<Dot> {
  const result = await db.query(`
    SELECT *
    FROM dots
    WHERE id=$1
  `, [id]);

  return mapRowToJson(result.rows[0]);
}

async function insertDot(dot: Dot): Promise<Dot> {
  const result = await db.query(`
    INSERT INTO dots (dots)
    VALUES ($1)
    RETURNING *
  `, [dot.dots]);

  return mapRowToJson(result.rows[0]);
}

export {
  getDot,
  insertDot,
};
