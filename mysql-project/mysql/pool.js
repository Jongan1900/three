var config=require('./conn');
var mysql=require('mysql');
var pool=mysql.createPool({
    // 连接限制数，取决于硬件
    connectionLimit:10,
    // 解构
    ...config
});

const db=(sql,sqlarr,callback)=>{
    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!
        // Use the connection
        connection.query(sql, sqlarr, function (error, results, fields) {
            // When done with the connection, release it.
            callback(results);
            connection.release();

            // Handle error after the release.
            if (error) throw error;

            // Don't use the connection here, it has been returned to the pool.
        });
    });
}

module.exports=db;