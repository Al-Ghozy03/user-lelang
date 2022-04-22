import axios from "axios";

export const baseUrl = "http://localhost:8000";
export const token = localStorage.getItem("token");

export async function slider() {
  try {
    let url = `${baseUrl}/barang/today`;
    let res = await axios.get(url, {
      headers: { authorization: `Bearer ${token}` },
    });
    return res.data.data;
  } catch (er) {
    console.log(er);
  }
}
export async function other() {
  try {
    let url = `${baseUrl}/barang/all`;
    let res = await axios.get(url, {
      headers: { authorization: `Bearer ${token}` },
    });
    return res.data.data.rows;
  } catch (er) {
    console.log(er);
  }
}

export async function detail(id) {
  try {
    let url = `${baseUrl}/barang/detail/${id}`;
    let res = await axios.get(url, {
      headers: { authorization: `Bearer ${token}` },
    });
    return res.data.data.rows;
  } catch (er) {}
}

export async function searchData(
  key,
  sortBy = "id",
  orderBy = "asc",
  page = 1,
  pageSize = 10
) {
  try {
    let url = `${baseUrl}/barang/search?key=${key}&sortBy=${sortBy}&orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;
    let res = await axios.get(url, {
      headers: { authorization: `Bearer ${token}` },
    });
    return res.data.data.rows;
  } catch (er) {}
}

export async function getByCategory(category) {
  try {
    let url = `${baseUrl}/barang/category?category=${category}`;
    let res = await axios.get(url, {
      headers: { authorization: `Bearer ${token}` },
    });
    return res.data.data.rows;
  } catch (er) {
    console.log(er);
  }
}

export async function penawaranList(id) {
  try {
    let url = `${baseUrl}/lelang/history/${id}`;
    let res = await axios.get(url, {
      headers: { authorization: `Bearer ${token}` },
    });
    return res.data.data;
  } catch (er) {
    console.log(er);
  }
}
export async function detailSchedule(id) {
  try {
    let url = `${baseUrl}/lelang/schedule/${id}`;
    let res = await axios.get(url, {
      headers: { authorization: `Bearer ${token}` },
    });
    return res.data.data;
  } catch (er) {
    console.log(er);
  }
}
