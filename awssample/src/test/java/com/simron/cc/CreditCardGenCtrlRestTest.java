//package com.simron.cc;
//
//import static org.springframework.test.web.client.match.MockRestRequestMatchers.requestTo;
//import static org.springframework.test.web.client.response.MockRestResponseCreators.withSuccess;
//
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.client.RestClientTest;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.client.MockRestServiceServer;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.simron.domain.CodeValue;
//
//import static org.junit.Assert.assertEquals;
//
//@RunWith(SpringRunner.class)
//@RestClientTest(CreditCardGenCtrlRestTestClient.class)
//@SpringBootTest(classes = CreditCardGenCtrlRestTest.class)
//@ComponentScan("com.simron.cc") // so that it can auto wire CreditCardGenCtrlRestTestClient
//public class CreditCardGenCtrlRestTest {
// 
//    @Autowired
//    private CreditCardGenCtrlRestTestClient client;
// 
//    @Autowired
//    private MockRestServiceServer server;
// 
//    @Autowired
//    private ObjectMapper objectMapper;
// 
//    @Before
//    public void setUp() throws Exception {
//        String detailsString = 
//          objectMapper.writeValueAsString(new CreditCardGenCtrl());
//         
//        this.server.expect(requestTo("/getCCType"))
//          .andRespond(withSuccess(detailsString, MediaType.APPLICATION_JSON));
//    }
// 
//    @Test
//    public void whenCallingGetUserDetails_thenClientMakesCorrectCall() 
//      throws Exception {
// 
//    	CodeValue[] details = this.client.getUserDetails();
//    	assertEquals(1,details[0].getCode());
//    	assertEquals("Visa",details[0].getValue());
//    }
//}
